using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SE.Data;
using SE.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        public UserController(AppDbContext context)
        {
            _context = context;
        }

        //mo

        // api/user/register
        [HttpPost("register")]
        public async Task<ActionResult> PostAsync([FromBody] NewUserRequest newUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_context.Users.Any(x => x.email == newUser.email))
            {
                return NotFound("User already existed");
            }

            var user = new User
            {
                userID = Guid.NewGuid(),
                name = newUser.name,
                email = newUser.email,
                password = newUser.password
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok();

        }

        // api/user/login
        [HttpPost("login")]
        public ActionResult Post([FromBody] ValidateUser validateUser)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (_context.Users.Any(x => x.email == validateUser.email && x.password == validateUser.password))
            {
                return Ok();
            }


            return NotFound("Email not found or wrong password");
        }

    }
}
