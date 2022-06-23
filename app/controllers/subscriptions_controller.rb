class SubscriptionsController < ApplicationController

    def create
        user = User.find(session[:user_id])
        plan = Plan.find_by(title: params[:title])

        newSubs = Subscription.create(user_id: user.id, plan_id: plan.id)
        render json: newSubs, status: :created
    end
end
