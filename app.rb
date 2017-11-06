require 'sinatra'

get '/' do
  erb :index
end

get '/chessclock' do
  player_names = validate_array(params['n'])
  num_players = validate_number(params['p'], 3)
  players = (1..num_players).to_a
  player_names.each_with_index do |name,i|
    players[i] = name
  end
  @players = players
  erb :chessclock
end

get '/timer' do
  @time = validate_number(params['t'], 60)
  erb :timer
end

helpers do
  def validate_array(array)
    return [] if array.nil?
    return array
  end

  def validate_number(num, default)
    default ||= -1
    return default if num.nil?
    num.gsub!(/[^0-9]/, "")
    return default if num.empty?
    return num.to_i
  end
end
