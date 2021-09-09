using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace csbackend.Controllers
{
    // [EnableCors("CarricksuProfile")]
    [Route("api/[controller]")]
    [ApiController]
    public class VideoController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<VideoModel>> Videos()
        {
            var filename = System.IO.Path.Combine(System.IO.Directory.GetCurrentDirectory(), "assets/videos.json");
            if (!System.IO.File.Exists(filename))
            {
                var data = new List<VideoModel>();
                data.Add(
                    new VideoModel("Abraham", "https://www.youtube.com/embed/jL0rQlDYGL8")
                );
                VideoModel.Save(data, filename);
            }
            var videoData = VideoModel.Load(filename);
            return Ok(videoData);
        }

    }
}
