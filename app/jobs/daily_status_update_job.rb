class DailyStatusUpdateJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    puts 'sending an update of the status of the server'
  end
end
