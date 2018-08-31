class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    # devise_parameter_sanitizer.permit(:edit, keys: [:name])
    # devise_parameter_sanitizer.permit(:edit, keys: [:email])
    # devise_parameter_sanitizer.permit(:update, keys: [:name])
    # devise_parameter_sanitizer.permit(:update, keys: [:email])
  end
end
