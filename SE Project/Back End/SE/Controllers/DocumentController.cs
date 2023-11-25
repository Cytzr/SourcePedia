using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using SE.Data;
using SE.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections;
using System.Reflection.Metadata;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DocumentController : ControllerBase
    {
        public readonly AppDbContext _context;
        public DocumentController(AppDbContext context)
        {
            _context = context;
        }
        // GET: api/<DocumentController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<DocumentController>/5
        [HttpGet]
        [Route("GetDocumentByDocumentID/{id}")]
        public ActionResult<DocumentResponse> GetDocumentByDocumentID([FromRoute] Guid id)
        {
            var doc = _context.Documents.Find(id);
            if (doc == null)
            {
                return NotFound("Document not found");
            }
            var user = _context.Users.Find(doc.userID);
            var docRes = new DocumentResponse
            {
                documentID = doc.documentID,
                userID = doc.userID,
                userName = user.name,
                title = doc.title,
                content = doc.content,
                publishedTime = doc.publishedTime
            };

            return Ok(docRes);
        }
        [HttpGet]
        [Route("GetDocumentByUserID/{userId}")]
        public ActionResult<List<DocumentResponse>> GetDocumentByUserID([FromRoute] Guid userId)
        {
            var user = _context.Users.Find(userId);
            if (user == null)
            {
                return NotFound("User Not Found");
            };
            var docList = _context.Documents
                .Where(d => d.userID == user.userID)
                .Select(d => new DocumentResponse
                {
                    documentID = d.documentID,
                    userID = d.userID,
                    userName = user.name,
                    title = d.title,
                    content = d.content,
                    publishedTime = d.publishedTime
                });
            return Ok(docList.ToList());
        }
        // POST api/<DocumentController>
        [HttpPost]
        [Route("PostDocument")]
        public async Task<ActionResult<object>> PostDocument([FromBody] DocumentRequest documents)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (!(_context.Users.Any(u => u.userID == documents.userID)))
            {
                return NotFound("There is no such user");
            }
            var newDocument = new Documents
            {
                documentID = Guid.NewGuid(),
                userID = documents.userID,
                title = documents.title,
                content = documents.content,
                publishedTime = DateTime.Now
            };

            _context.Documents.Add(newDocument);

            await _context.SaveChangesAsync();

            return Ok(newDocument.documentID);
        }
        [HttpPost]
        [Route("PostDocumentTag")]
        public async Task<ActionResult> PostDocumentTag([FromBody] DocumentsTagRequest doctag)
        {
            if (!(_context.Documents.Any(d => d.documentID == doctag.documentID)))
            {
                return NotFound("Document Not Found");
            }
            else if (!(_context.Tags.Any(t => t.tagID == doctag.tagID)))
            {
                return NotFound("Tag doesnt exist");
            }
            var newDocTag = new DocumentsTag
            {
                documentID = doctag.documentID,
                tagID = doctag.tagID
            };
            _context.DocumentsTag.Add(newDocTag);

            await _context.SaveChangesAsync();

            return Ok();
        }

        // PUT api/<DocumentController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<DocumentController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}