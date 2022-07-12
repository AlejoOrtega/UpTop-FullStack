class SessionsController < ApplicationController

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            if user[:banned]
                render json: {error: 'Sorry its not possible to log in into your account, contact support'}, status: :unauthorized
            else
                session[:user_id] ||= user.id
                render json: user, status: :ok
            end
        else
            render json: {error: 'Incorrect username or password'}, status: :unauthorized
        end
    end

    def destroy
        session.delete(:user_id)
        head :no_content
    end

end
