require 'sinatra'

get '/' do
  @time = validate_time(params['t'])
  erb :index
end

helpers do
  def validate_time(time)
    valid_time = 60
    return valid_time if time.nil?
    time.gsub!(/[^0-9]/, "")
    return valid_time if time.empty?
    return time
  end
end
