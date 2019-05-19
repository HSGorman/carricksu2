using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Newtonsoft.Json;

namespace csbackend
{
    public class VideoModel
    {
        public VideoModel(string videoName, string url)
        {
            VideoName = videoName;
            Url = url;
        }
        private static List<VideoModel> _videoList = new List<VideoModel>();
        public static List<VideoModel> Load(string filename)
        {
            var data = File.ReadAllText(filename);
            return JsonConvert.DeserializeObject<List<VideoModel>>(data);
        }
        public static void Save(List<VideoModel> data, string filename)
        {
            File.WriteAllText(filename, JsonConvert.SerializeObject(data));
        }
        public string VideoName { get; set; }
        public string Url { get; set; }
    }
}
