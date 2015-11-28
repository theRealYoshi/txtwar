require 'faker'

FactoryGirl.define do
  factory :phone_number do
    phone_number "+1#{Faker::PhoneNumber.subscriber_number(3)}#{Faker::PhoneNumber.subscriber_number(3)}#{Faker::PhoneNumber.subscriber_number}"
    delay_time Faker::Number.between(1,10)
  end

  factory :delay_time do
    delay_time Faker::Number.between(1,10)
  end
end
