const service = require("./reviews.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function reviewExists(request, response, next) {
    const {reviewId} = request.params;
    const review = await service.read(reviewId);

    if(review) {
        response.locals.review = review;
        return next();
    }

    next({
        status: 404, 
        message: "Review cannot be found"
    })
}
  
  async function update (request, response, next) {
    console.log("update")
    const updatedReview = {
      ...request.body.data,
      review_id: response.locals.review.review_id,
    };
    
    const result = await service.update(updatedReview);
    console.log("result",result);
    //updatedReview.critic = await service.listCritics(updatedReview.critic_id)
    response.json({ data: result});
  }
  
  async function destroy (request, response, next) {
    console.log("destory 3")
    await service.delete(
      response.locals.review.review_id
    );
    
    response.sendStatus(204);
    
  }

  module.exports = {
    update: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(update)],
    delete: [asyncErrorBoundary(reviewExists), asyncErrorBoundary(destroy)]
  }
