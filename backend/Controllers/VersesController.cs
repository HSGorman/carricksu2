using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace csbackend.Controllers
{
    [EnableCors("CarricksuProfile")]
    [Route("api/[controller]")]
    [ApiController]
    public class VersesController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> ListImages()
        {
            return Ok(Directory.GetFiles("./assets/bibleverses").Select(a => Path.GetFileName(a)).ToArray());
        }

        [HttpGet("{name}")]
        public IActionResult Get(string name)
        {
            var filename = $"./assets/bibleverses/{name}";
            if (!System.IO.File.Exists(filename))
            {
                return new EmptyResult();
            }
            var bytes = System.IO.File.ReadAllBytes(filename);
            return File(bytes, "image/jpg");
        }
    }
}
