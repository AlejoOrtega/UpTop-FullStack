class LinksController < ApplicationController
    def create
        if User.find(session[:user_id]).admin?
            newLink = Link.create(link_params)
            render json: newLink, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    def update
        if User.find(session[:user_id]).admin?
            link = Link.find(params[:id])
            link.update(link_params)
            render json: link, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    def destroy
        if User.find(session[:user_id]).admin?
            link = Link.find(params[:id])
            link.destroy
            head :no_content, status: :ok
        else
            render json: {error: 'Not Authorized'}, status: :unauthorized
        end
    end

    private

    def link_params
        params.permit(:title, :link_url, :course_id)
    end
end
