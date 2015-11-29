require 'spec_helper'
require 'rails_helper'

describe PhoneNumber, type: :model do
  context "when phone number is invalid" do
    it "should require a number" do
      expect(FactoryGirl.build(:phone_number, phone_number: "")).not_to be_valid
    end

    it "should require a delay time" do
      expect(FactoryGirl.build(:phone_number, delay_time: "")).not_to be_valid
    end

  end

  describe 'validations' do
    it { should validate_presence_of(:phone_number) }
    it { should validate_presence_of(:delay_time) }
    it "should be valid with both phone number and delay time" do
      expect(FactoryGirl.build(:phone_number)).to be_valid
    end
  end

  describe 'invalid phone numbers' do
    let(:not_enough_numbers) {PhoneNumber.create(phone_number: "+1222333444", delay_time:5)}
    let(:letters_in_numbers) {PhoneNumber.create(phone_number: "+jdasklfafd", delay_time:5)}
    let(:plus_in_number) {PhoneNumber.create(phone_number: "12223334444a", delay_time:5)}

    it 'doesnt validate with not enough numbers' do
      expect(not_enough_numbers).not_to be_valid
    end

    it 'doesnt validate with letters in numbers' do
      expect(letters_in_numbers).not_to be_valid
    end

    it 'doesnt validate with plus not in numbers' do
      expect(plus_in_number).not_to be_valid
    end
  end

  describe 'invalid delay_times' do
    let(:delay_time_as_string) {PhoneNumber.create(phone_number: "+12223334444", delay_time:"five")}
    let(:delay_time_as_empty_string) {PhoneNumber.create(phone_number: "+12223334444", delay_time:"")}

    it 'doesnt validate with delay time as string' do
      expect(delay_time_as_string).not_to be_valid
    end

    it 'doesnt validate with empty delay time' do
      expect(delay_time_as_empty_string).not_to be_valid
    end
  end

  describe 'error handling' do
    let(:wrong_length) {PhoneNumber.create(phone_number: "+1222333444", delay_time:5)}
    let(:wrong_length2) {PhoneNumber.create(phone_number: "+1222333444444", delay_time:5)}
    let(:wrong_format) {PhoneNumber.create(phone_number: "+1222333aaaa", delay_time:5)}
    let(:wrong_delay_format) {PhoneNumber.create(phone_number: "+12223334444", delay_time:"five")}

    it 'gives appropriate error if number is too short or long' do
      wrong_length.valid?
      wrong_length2.valid?
      expect(wrong_length.errors.messages[:phone_number]).to include("is the wrong length (should be 12 characters)")
      expect(wrong_length2.errors.messages[:phone_number]).to include("is the wrong length (should be 12 characters)")
    end

    it 'gives appropriate error if number is in wrong format' do
      wrong_delay_format.valid?
      expect(wrong_delay_format.errors[:delay_time]).to include("only numbers allowed")
    end
  end

end
