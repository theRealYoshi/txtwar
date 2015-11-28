require 'spec_helper'
require 'rails_helper'

describe PhoneNumber, type: :model do

  describe 'validations' do
    it { should validate_presence_of(:phone_number) }
    it { should validate_presence_of(:delay_time) }
  end

  describe 'valid phone number' do
    it "has a valid factory" do
      PhoneNumber.create(:phone_number).should be_valid
    end
  end
end
