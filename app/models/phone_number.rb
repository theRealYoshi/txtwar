class PhoneNumber < ActiveRecord::Base
  validates :phone_number, :delay_time, presence: true
  validates :delay_time, numericality: { only_integer: true,
                                          message: "only numbers allowed"}
  validates :phone_number, length: {is: 12,
                                    too_short: "must be valid phone number",
                                    too_long: "must be valid phone number"}
  validates :phone_number, format: { with: /[+][1]\d{10}/,
                                     message: "must be all numbers"}
  validate :twilio_lookup

  private

    def twilio_lookup
      lookup_client = Twilio::REST::LookupsClient.new(ENV["twilio_account_sid"], ENV["twilio_auth_token"])
      begin
        response = lookup_client.phone_numbers.get(phone_number)
        response.phone_number #if invalid, throws an exception. If valid, no problems.
        return true
      rescue => e
        if e.code == 20404
          #only if the code doesn't exist
          errors.add("twilio", "is not found in phone number database")
          return false
        else
          #raise e
        end
      end
    end
end
