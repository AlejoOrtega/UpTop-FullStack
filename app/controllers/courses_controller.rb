class CoursesController < ApplicationController
    def show
        user = User.find(session[:user_id])
        render json: user.courses, status: :ok
    end
end
