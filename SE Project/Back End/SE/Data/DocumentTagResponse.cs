namespace SE.Data
{
    public class DocumentTagResponse
    {
        public Guid documentID { get; set; }
        public Guid userID { get; set; }
        public string title { get; set; }
        public string content { get; set; }
        public DateTime publishedTime { get; set; }
        public Guid tagID { get; set; }
        public string tagName { get; set; }
        public string tagImage { get; set; }
    }
}
