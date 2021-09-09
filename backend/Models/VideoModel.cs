using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Text.Json.Serialization;
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
            return JsonSerializer.Deserialize<List<VideoModel>>(data);
        }
        public static void Save(List<VideoModel> data, string filename)
        {
            File.WriteAllText(filename, JsonSerializer.Serialize(data));
        }
        public string VideoName { get; set; }
        public string Url { get; set; }
    }
}
