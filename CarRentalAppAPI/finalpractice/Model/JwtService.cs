using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;

namespace finalpractice.Model
{
    public class JwtService
    {
        public string SecretKey { get; set; }
        public int TokenDuration { get; set; }
        private readonly IConfiguration config;

        public JwtService(IConfiguration _config)
        {
            config = _config;
            SecretKey = config.GetSection("jwtConfig:Key").Value;

            // Parse TokenDuration as an integer with a default value of 1
            if (!int.TryParse(config.GetSection("jwtConfig:Duration").Value, out int duration))
            {
                // Handle the case where Duration couldn't be parsed (use a default value, log an error, etc.)
                duration = 1; // Default value
            }
            TokenDuration = duration;
        }

        public string GenerateToken(string  userId, string email, string password, string name, string phoneNumber,string address)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
            var signature = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var claims = new[]
            {
                new Claim("userId", userId),
                new Claim("name", name),
                new Claim("email", email),
                new Claim("password", password),
                new Claim("phoneNumber", phoneNumber),
                new Claim("address", address),

            };

            var jwtToken = new JwtSecurityToken(
                issuer: "localhost",
                audience: "localhost",
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(TokenDuration),
                signingCredentials: signature
            );

            try
            {
                return new JwtSecurityTokenHandler().WriteToken(jwtToken);
            }
            catch (Exception ex)
            {
                // Handle token generation errors, e.g., logging or rethrowing
                throw new Exception("Error generating JWT token", ex);
            }
        }
    }
}
