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
        [Route("GetDocument")]
        public ActionResult<DocumentResponse> Get()
        {
            var doclist = _context.Documents;
            if (doclist == null)
            {
                return null;
            }
            //  doclist.Select(x => new DocumentResponse
            //   {
            //      documentID = x.documentID,
            //       userID = x.userID,
            //       title = x.title,
            //       content = x.content,
            //       publishedTime = x.publishedTime
            //   });

            return Ok(doclist.ToList());
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
            _context.DocumentsTags.Add(newDocTag);

            await _context.SaveChangesAsync();

            return Ok("Add Documents Tag Success");
        }

        [HttpGet]
        [Route("SearchDocumentsByTagID/{tagID}")]
        public ActionResult<List<DocumentResponse>> SearchDocumentsByTagID([FromRoute] Guid tagID)
        {
            var docList = _context.DocumentsTags
                .Where(dt => dt.tagID == tagID)
                .Join(_context.Documents,
                    dt => dt.documentID,
                    d => d.documentID,
                    (dt, d) => new DocumentResponse
                    {
                        documentID = d.documentID,
                        userID = d.userID,
                        userName = _context.Users.FirstOrDefault(u => u.userID == d.userID).name,
                        title = d.title,
                        content = d.content,
                        publishedTime = d.publishedTime
                    })
                .ToList();

            if (docList.Count == 0)
            {
                return NotFound("No documents found for the specified tagID");
            }

            return Ok(docList);
        }

        [HttpGet]
        [Route("SearchDocumentsByTags")]
        public ActionResult<List<DocumentResponse>> SearchDocumentsByTags([FromQuery] List<Guid> tagIDs)
        {
            if (tagIDs == null || tagIDs.Count == 0)
            {
                return BadRequest("Please provide at least one tagID.");
            }

            var docList = _context.Documents
                .Where(d => _context.DocumentsTags
                    .Where(dt => tagIDs.Contains(dt.tagID) && dt.documentID == d.documentID)
                    .Count() == tagIDs.Count)
                .Select(d => new DocumentResponse
                {
                    documentID = d.documentID,
                    userID = d.userID,
                    userName = (_context.Users.FirstOrDefault(u => u.userID == d.userID)).name,
                    title = d.title,
                    content = d.content,
                    publishedTime = d.publishedTime
                })
                .ToList();

            if (docList.Count == 0)
            {
                return NotFound("No documents found for the specified tags");
            }

            return Ok(docList);
        }

        // PUT api/<DocumentController>/5
        [HttpPut]
        public async Task<ActionResult> PutAsync([FromBody] UpdateDocumentRequest docReq)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(!_context.Documents.Any(d => d.documentID == docReq.documentID))
            {
                return NotFound("Document not found");
            }

            if(!_context.Users.Any(u => u.userID == docReq.userID))
            {
                return NotFound("User not found");
            }

            var newDoc = await _context.Documents.FirstOrDefaultAsync(d => d.documentID == docReq.documentID);
            newDoc.title = docReq.title;
            newDoc.content = docReq.content;
            newDoc.publishedTime = DateTime.Now;
            
            await _context.SaveChangesAsync();

            return Ok();
        }

        //public async Task<ActionResult<object>> PostDocument([FromBody] DocumentRequest documents)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
        //    if (!(_context.Users.Any(u => u.userID == documents.userID)))
        //    {
        //        return NotFound("There is no such user");
        //    }
        //    var newDocument = new Documents
        //    {
        //        documentID = Guid.NewGuid(),
        //        userID = documents.userID,
        //        title = documents.title,
        //        content = documents.content,
        //        publishedTime = DateTime.Now
        //    };

        //    _context.Documents.Add(newDocument);

        //    await _context.SaveChangesAsync();

        //    return Ok(newDocument.documentID);
        //}



        [HttpDelete("DocumentTag/{id}")]
        public ActionResult DeleteDocumentTag(Guid id)
        {
            var docList = _context.DocumentsTags.Where(x => x.documentID == id).ToList();
            if (docList.Count == 0)
            {
                return NotFound("Document not found");
            }

            foreach(var doc in docList)
            {
                _context.DocumentsTags.Remove(doc);
            }
            _context.SaveChangesAsync();

            return Ok();
        }





        [HttpDelete("Document/{id}")]
        public async Task<IActionResult> DeleteDocumentAsync(Guid id)
        {
            var doc = await _context.Documents.FirstOrDefaultAsync(x => x.documentID.Equals(id));
            if (doc == null)
            {
                return NotFound("Document not found");
            }

            _context.Documents.Remove(doc);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}