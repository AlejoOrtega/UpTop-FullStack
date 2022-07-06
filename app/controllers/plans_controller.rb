class PlansController < ApplicationController

    def index
        if User.find(session[:user_id]).admin
            render json: Plan.all, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end
end
