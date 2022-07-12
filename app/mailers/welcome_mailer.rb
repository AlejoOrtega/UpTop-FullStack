class WelcomeMailer < ApplicationMailer
    def send_welcome_message
        @user = params[:user]
        mail(to: @user.email, subject:'Welcome to Up Top Trading Community!')
    end
end
