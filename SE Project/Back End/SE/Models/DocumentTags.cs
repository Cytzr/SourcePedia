using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;

namespace SE.Models
{
    [Table("DocumentTags")]
    public class DocumentTags
    {
        [ Column(Order = 0)]
        public Guid tagID { get; set; }
        [Column(Order = 1)]
        public Guid documentID { get; set; }
      //  public Document Document { get; set; }
     //   public Tag Tag { get; set; }
    }
}
