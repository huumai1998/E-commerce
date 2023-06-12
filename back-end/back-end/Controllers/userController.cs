using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using back_end.Models;

namespace back_end.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class userController : ControllerBase
    {
        private readonly List<userModel> _users = new List<userModel>();

        // GET: api/user
        [HttpGet]
        public ActionResult<IEnumerable<userModel>> GetUsers()
        {
            return _users;
        }

        // GET: api/user/{id}
        [HttpGet("{id}")]
        public ActionResult<userModel> GetUser(string id) 
        {
            var user = _users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }

        // POST: api/user
        [HttpPost]
        public ActionResult<userModel> CreateUser(userModel userModel)
        {
            userModel.Id = Guid.NewGuid().ToString();
            userModel.createAt = DateTime.UtcNow;
            userModel.updateAt = DateTime.UtcNow;

            _users.Add(userModel);

            return CreatedAtAction(nameof(GetUser), new {id = userModel.Id }, userModel);
        }

        // PUT: api/user/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateUser(string id, userModel updatedUser)
        {
            var user = _users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            user.Name = updatedUser.Name;
            user.Email = updatedUser.Email;
            user.Password = updatedUser.Password;
            user.isAdmin = updatedUser.isAdmin;
            user.updateAt = DateTime.UtcNow;

            return NoContent();
        }

        // DELETE: api/user/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(string id)
        {
            var user = _users.FirstOrDefault(u => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }

            _users.Remove(user);

            return NoContent();
        }
    }
}