source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'activeadmin'
gem 'acts-as-taggable-on', '~> 4.0'
gem 'angular-rails-templates', '~> 1.0.2'
gem "awesome_print", require:"ap"
gem 'aws-sdk', '~> 2.3'
gem 'bourbon'
gem 'cancan'
gem 'coffee-rails', '~> 4.2'
gem 'devise'
gem 'draper'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'neat'
gem "paperclip", "~> 5.0.0"
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.0'
gem 'pundit'
gem 'rails', '~> 5.0.2'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
gem 'uglifier', '>= 1.3.0'

group :production, :staging do
  gem 'rails_12factor'
end

group :development, :test do
  gem 'better_errors'
  gem 'pry'
  gem 'binding_of_caller'
  gem 'byebug', platform: :mri
  gem 'figaro'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end
