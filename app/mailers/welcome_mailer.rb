class WelcomeMailer < ApplicationMailer
    def send_welcome_message
        mail(to: 'xrevollo96@gmail.com', subject:'This is a test')
    end
end
