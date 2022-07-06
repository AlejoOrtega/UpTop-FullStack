class CoursesController < ApplicationController
    
    def index
        if User.find(session[:user_id]).admin?
            render json: Course.all, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    def show
        user = User.find(session[:user_id])
        render json: user.courses, status: :ok
    end

    def create
        if User.find(session[:user_id]).admin?
            newCourse = Course.create(course_params)
            render json: newCourse, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    def update
        if User.find(session[:user_id]).admin?
            course = Course.find(params[:id])
            course.update(course_params)
            render json: course, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    def destroy
        if User.find(session[:user_id]).admin?
            course = Course.find(params[:id])
            course.destroy
            head :no_content, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    def course_links
        if User.find(session[:user_id]).admin?
            course = Course.find(params[:id])
            render json: course.links, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    private

    def course_params
        params.permit(:title, :description, :plan_id, :image_url)
    end
end
