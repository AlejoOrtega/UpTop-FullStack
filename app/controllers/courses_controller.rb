class CoursesController < ApplicationController
    def show
        user = User.find_by(username: params[:username])
        render json: user.courses, status: :ok
    end
end
