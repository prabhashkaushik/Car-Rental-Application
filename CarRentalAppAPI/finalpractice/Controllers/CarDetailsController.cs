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
    public class CarDetailsController : ControllerBase
    {
        private readonly CarRentalContext _context;

        public CarDetailsController(CarRentalContext context)
        {
            _context = context;
        }

        // GET: api/CarDetails
        [HttpGet("ShowCarDetails")]
        public async Task<ActionResult<IEnumerable<CarDetail>>> GetCarDetails()
        {
            
            if (_context.CarDetails == null)
            {
                return NotFound();
            }

            return await _context.CarDetails.ToListAsync();
        }


        [HttpGet("AvailableCarsshow")]
        public async Task<ActionResult<IEnumerable<CarDetail>>> GetAvailableCarDetails()
        {
            if (_context.CarDetails == null)
            {
                return NotFound();
            }
      var availableCarDetails = await _context.CarDetails.Where(u => u.AvailabilityStatus == "true")
     .ToListAsync();

            return availableCarDetails;


        }


            // GET: api/CarDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CarDetail>> GetCarDetail(int id)
        {
          if (_context.CarDetails == null)
          {
              return NotFound();
          }
            var carDetail = await _context.CarDetails.FindAsync(id);

            if (carDetail == null)
            {
                return NotFound();
            }

            return carDetail;
        }

        // PUT: api/CarDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
      
        [HttpPut("UpdateRequest/{VehicleId}")]
        public async Task<IActionResult> PutCarDetail(int VehicleId, CarDetail carDetail)
        {
            if (VehicleId != carDetail.VehicleId)
            {
                return BadRequest();
            }

            _context.Entry(carDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarDetailExists(VehicleId))
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

        // POST: api/CarDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost("AddCarDeatails")]
        public async Task<ActionResult<CarDetail>> PostCarDetail(CarDetail carDetail)
        {
          if (_context.CarDetails == null)
          {
              return Problem("Entity set 'CarRentalContext.CarDetails'  is null.");
          }
            
           

            _context.CarDetails.Add(carDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCarDetail", new { id = carDetail.VehicleId }, carDetail);
        }



        [HttpGet("RentCarDetailwithId/{vehicleId}")] // Change to HttpGet
        public async Task<ActionResult<CarDetail>> GetRentCarDetailwithId(int vehicleId) // Change the method name
        {

            
            var userAvailable = _context.CarDetails.Where(u => u.VehicleId == vehicleId ).FirstOrDefault();
            if (userAvailable == null)
            {
                return Problem("Entity set 'CarRentalContext.CarDetails' is null.");
            }
            return Ok(userAvailable);
        }


        // DELETE: api/CarDetails/5
        [HttpDelete("DeleteCarDetails/{DeleteCarDetailId}")]
        public async Task<IActionResult> DeleteCarDetail(int DeleteCarDetailId)
        {
            if (_context.CarDetails == null)
            {
                return NotFound();
            }
            var carDetail = await _context.CarDetails.FindAsync(DeleteCarDetailId);
            if (carDetail == null)
            {
                return NotFound();
            }

            _context.CarDetails.Remove(carDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CarDetailExists(int id)
        {
            return (_context.CarDetails?.Any(e => e.VehicleId == id)).GetValueOrDefault();
        }
    }
}
