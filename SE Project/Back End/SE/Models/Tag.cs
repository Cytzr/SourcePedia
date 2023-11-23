﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SE.Models
{
    [Table("Tags")]
    public class Tag
    {
        [Key]
        public Guid tagID { get; set; }
        [MaxLength(255)]
        public string tagName { get; set; }
    }
}
