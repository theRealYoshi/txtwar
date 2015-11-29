class PhoneNumber < ActiveRecord::Base
  validates :phone_number, :delay_time, presence: true
  validates :delay_time, numericality: { only_integer: true,
                                          message: "only numbers allowed"}
  validates :phone_number, length: {is: 12,
                                    too_short: "must be valid phone number",
                                    too_long: "must be valid phone number"}
  validates :phone_number, format: { with: /[+][1]\d{10}/,
                                     message: "must be all numbers"}
  #validate :twilio_lookup have this validation when doing the keystroke lookup

  def two_factor_auth
  end

  def twilio_received_message
    #receive and store in database or other model
  end


  def twilio_remind
    # send out using client and twilio account
    client = Twilio::REST::Client.new(ENV["twilio_account_sid"], ENV["twilio_auth_token"])
    client.account.messages.create(
       :from => from,
       :to => key,
       :body => "Text back your crush now!"
     )
  end

  def phone_number_exists?
  end


  private

  def self.twilio_lookup(phone_number)
    lookup_client = Twilio::REST::LookupsClient.new(ENV["twilio_account_sid"], ENV["twilio_auth_token"])
    begin
      response = lookup_client.phone_numbers.get(phone_number)
      response.phone_number
      return true
    rescue => e
      return false
    end
  end
end
