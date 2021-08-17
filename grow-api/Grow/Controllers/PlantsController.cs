using System.Collections.Generic;
using Grow.Data;
using Grow.Models;
using Microsoft.AspNetCore.Mvc;

namespace Grow.Controllers
{
    [ApiController]
    [Route("api/plants")]
    public class PlantsController : ControllerBase
    {

        private readonly IPlantRepository repository;

        public PlantsController(IPlantRepository repository)
        {
            this.repository = repository;
        }

        // GET: api/plants
        [HttpGet]
        public ActionResult<IEnumerable<Plant>> GetPlants() => Ok(repository.GetPlants());

        // GET: api/plants/{id}
        [HttpGet("{id}")]
        public ActionResult<Plant> GetPlant(int id) => Ok(repository.GetPlant(id));

        // POST: api/plants/{id}
        [HttpPost]
        public ActionResult AddPlant(Plant plant)
        {
            repository.AddPlant(plant);

            return CreatedAtAction(nameof(AddPlant), new { id = plant.Id }, plant);
        }

        // PUT: api/plants/{id}
        [HttpPut("{id}")]
        public IActionResult Update(int id, Plant plant)
        {
            if (id != plant.Id)
                return BadRequest();

            repository.UpdatePlant(plant);

            return NoContent();
        }

        // DELETE: api/plants/{id}
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Plant existingPlant = repository.GetPlant(id);

            if (existingPlant is null)
                return NotFound();

            repository.DeletePlant(existingPlant);

            return NoContent();
        }
    }
}
