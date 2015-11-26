class PhoneNumber < ActiveRecord::Base
  validates :phone_number, :delay_time, presence: true
  validates :delay_time
  validates :phone_number, length: {is: 12,
                                    too_short: "must be valid phone number",
                                    too_long: "must be valid phone number"}

  #add validations for actual phone numbers
  #add validations for on front-end

  #https://www.twilio.com/lookup for phone number validation

  #lookup_client = Twilio::REST::LookupsClient.new(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

end
