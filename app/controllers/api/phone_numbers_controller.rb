class Api::PhoneNumbersController < ApplicationController

  def create
  end

  def destroy
  end

  def twilio_lookup
     if PhoneNumber.twilio_lookup(params[:phone_number])
       render json: true
     else
       render json: false
     end
  end
end
