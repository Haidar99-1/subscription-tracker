import {Router} from 'express';
import {createSubscription, getUserSubscription, getSubscriptions, deleteSubscription, getSubscriptionsById, updateSubscriptionById} from '../controllers/subscription.controller.js';
import authorize from '../middlewares/auth.middleware.js';
const subscriptionRouter = Router();

subscriptionRouter.get('/', authorize ,getSubscriptions);
subscriptionRouter.post('/', authorize,createSubscription);
subscriptionRouter.get('/user/:id',authorize,getUserSubscription);
subscriptionRouter.delete('/:id', authorize,deleteSubscription);
subscriptionRouter.get('/:id', authorize,getSubscriptionsById);
subscriptionRouter.put('/:id', authorize,updateSubscriptionById);


export default subscriptionRouter;
