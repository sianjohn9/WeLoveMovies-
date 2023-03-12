const knex = require("../db/connection");
const mapProperties = require("../utils/map-properties");


function listCritics(criticId) { 
    return knex('critics as c')
      .where({'c.critic_id': criticId})
      .then((data) => data[0]);
}

// This function joins the reviews table and the critics table. It selects all the rows where review_id matches the arguments passed into the function. NewCritic is then applied to the value that is returned to nest some of the data that is returned.
function read (id) {
    return knex("reviews")
      .select("*")
      .where("review_id", id)
      .then((data) => data[0]);
}


// This function selects all the rows in the reviews table that has a matching id to the arguments id that was passed into the function and updates the rows with the argument that was passed into the function. Then the read function is used to display the updated data.
function update (newReview) {
    return knex("reviews")
      .select("*")
      .where({ review_id: newReview.review_id })
      .update(newReview, "*");
}


// This function deletes the row that has an id matching the argument that was passed into the function.
function destroy (reviewId) {
  return knex("reviews").where("review_id", reviewId).del();
}

module.exports = {
    
    read,
    update,
    listCritics,
    destroy
}