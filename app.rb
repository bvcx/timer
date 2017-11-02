require 'sinatra'

get '/' do
  erb :index
end

get '/chessclock' do
  @players = validate_number(params['p'], 3)
  erb :chessclock
end

get '/timer' do
  @time = validate_number(params['t'], 60)
  erb :timer
end

helpers do
  def validate_number(num, default)
    default ||= -1
    return default if num.nil?
    num.gsub!(/[^0-9]/, "")
    return default if num.empty?
    return num.to_i
  end
end
