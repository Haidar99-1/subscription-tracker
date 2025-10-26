import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
    try {
      const subscription = await Subscription.create({
        ...req.body,
        user: req.user._id,
      });
      res.status(201).json({ success: true, data:  subscription });
    } catch (e) {
      next(e);
    }
  }

export const getUserSubscription = async (req, res, next) => {  
    try {
        // check if the user is the same as the one in the token
        if (req.user.id !== req.params.id) {
           const error = new Error('You are not the owner of this account');
           error.status = 401;
            throw error;
        }
        const subscription = await Subscription.find({ user: req.params.id });
        res.status(200).json({ success: true, data: subscription });

    }catch(error) {
        next(error)
    }
}

export const getSubscriptionsById = async (req, res, next) => {
    try {
        const subscription = await Subscription.findById(req.params.id);
        res.status(200).json({ success: true, data: subscription });
    }catch(error) {
        next(error)
    }
}


export const getSubscriptions = async (req, res, next) => {  
    try {
        const subscriptions = await Subscription.find();
        res.status(200).json({ success: true, data: subscriptions });
    }catch(error) {
        next(error)
    }   
}

export const deleteSubscription = async (req, res, next) => {
    try {
        const cancelSubscription = await Subscription.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: cancelSubscription});

    }catch(error) {
        next(error)
    }
}


export const updateSubscriptionById = async (req, res, next) => {
    try {
        const updateSubscription = await Subscription.findByIdAndUpdate(req.params.id, {...req.body}, {new: true});
        res.status(200).json({ success: true, data: updateSubscription });

    }catch(error) {
        next(error)
    }
}