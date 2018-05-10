using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace portfolio.Models
{
    public class Projects
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public Byte Image { get; set; }
        public string Desctription { get; set; }
    }
}