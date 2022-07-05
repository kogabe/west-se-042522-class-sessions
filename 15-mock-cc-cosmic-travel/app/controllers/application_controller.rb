class ApplicationController < ActionController::API

    wrap_parameters false # This disables the default parameter wrapping which bundles all incoming request parameters into a hash under a key matching the controller they're routed to; basically adding a layer of protection which we're not using.  The default also causes an 'Unpermitted parameter' error in the server logs.

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_reponse
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def render_unprocessable_entity_reponse(exception)
        render json: { errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found_response(exception)
        render json: {error: "#{exception.model} not found"}, status: :not_found
    end
end
