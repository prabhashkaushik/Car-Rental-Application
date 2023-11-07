using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using finalpractice.Model;
using finalpractice.Modle;

namespace finalpractice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalAgreemnetDatasController : ControllerBase
    {
        private readonly CarRentalContext _context;

        public RentalAgreemnetDatasController(CarRentalContext context)
        {
            _context = context;
        }

        // GET: api/RentalAgreemnetDatas
        [HttpGet("getAllAgreement")]
        public async Task<ActionResult<IEnumerable<RentalAgreemnetData>>> GetRentalAgreemnetDataT()
        {
          if (_context.RentalAgreemnetDataT == null)
          {
              return NotFound();
          }

            return await _context.RentalAgreemnetDataT.ToListAsync();
        }

        // GET: api/RentalAgreemnetDatas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RentalAgreemnetData>> GetRentalAgreemnetData(int id)
        {
          if (_context.RentalAgreemnetDataT == null)
          {
              return NotFound();
          }
            var rentalAgreemnetData = await _context.RentalAgreemnetDataT.FindAsync(id);

            if (rentalAgreemnetData == null)
            {
                return NotFound();
            }

            return rentalAgreemnetData;
        }

        // PUT: api/RentalAgreemnetDatas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("UpdateRequest/{RentalAgreemnetId}")]
        public async Task<IActionResult> PutRentalAgreemnetData(int RentalAgreemnetId, RentalAgreemnetData rentalAgreemnetData)
        {
            if (RentalAgreemnetId != rentalAgreemnetData.RentalAgreementId)
            {
                return BadRequest();
            }

            _context.Entry(rentalAgreemnetData).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentalAgreemnetDataExists(RentalAgreemnetId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RentalAgreemnetDatas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("AddRentAgreementDeatails")]
        public async Task<ActionResult<RentalAgreemnetData>> PostRentalAgreemnetData(RentalAgreemnetData rentalAgreemnetData)
        {
          if (_context.RentalAgreemnetDataT == null)
          {
              return Problem("Entity set 'CarRentalContext.RentalAgreemnetDataT'  is null.");
          }
            _context.RentalAgreemnetDataT.Add(rentalAgreemnetData);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRentalAgreemnetData", new { id = rentalAgreemnetData.RentalAgreementId }, rentalAgreemnetData);
        }

        // DELETE: api/RentalAgreemnetDatas/5
        [HttpDelete("DeleteRentalAgreement/{rentalAgreementId}")]
        public async Task<IActionResult> DeleteRentalAgreemnetData(int rentalAgreementId)
        {
            if (_context.RentalAgreemnetDataT == null)
            {
                return NotFound();
            }
            var rentalAgreemnetData = await _context.RentalAgreemnetDataT.FindAsync(rentalAgreementId);
            if (rentalAgreemnetData == null)
            {
                return NotFound();
            }

            _context.RentalAgreemnetDataT.Remove(rentalAgreemnetData);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RentalAgreemnetDataExists(int id)
        {
            return (_context.RentalAgreemnetDataT?.Any(e => e.RentalAgreementId == id)).GetValueOrDefault();
        }
    }
}
