require 'sinatra'

get '/' do
  erb :index
end

get '/chessclock' do
  player_names = arrayify_names(params['names'])
  num_players = validate_number(params['p'], 2)
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
  def arrayify_names(names)
    return [] if names.nil?
    return names.split(',')
  end

  def validate_number(num, default)
    default ||= -1
    return default if num.nil?
    num.gsub!(/[^0-9]/, "")
    return default if num.empty?
    return num.to_i
  end
end
