require 'faker'

FactoryGirl.define do
  factory :phone_number do |f|
    f.phone_number {"+1" + Faker::PhoneNumber.area_code + Faker::PhoneNumber.subscriber_number(3) + Faker::PhoneNumber.subscriber_number}
    f.delay_time Faker::Number.between(1,10)
  end
end
