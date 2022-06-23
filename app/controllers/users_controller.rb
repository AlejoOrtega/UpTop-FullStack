class UsersController < ApplicationController
    
    def show
        user = User.find_by(id: session[:user_id])
        # byebug
        if user
          render json: user
        else
          render json: { error: session[:user_id] }, status: :unauthorized
        end
    end
    

    #signup
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] ||= user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find(session[:user_id])
        user.destroy
        session.delete(:user_id)
        head :no_content, status: :ok
    end

    def update
        user = User.find(session[:user_id])
        user.update(username: params[:new_username])
        render json: user, status: :ok
        
         
    end
    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
