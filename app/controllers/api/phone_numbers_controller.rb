class Api::PhoneNumbersController < ApplicationController

  def create
  end

  def destroy
  end

  def twilio_lookup
     if PhoneNumber.twilio_lookup(params[:phone_number])
       puts "valid number"
     else
       puts "invalid number"
     end
     #add jbuilder callback
  end
end
