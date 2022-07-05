class ScientistsController < ApplicationController

    before_action :find_scientist, only: [:show, :update, :destroy]
    # this filter will call the given method before the given actions run
    # it is an efficient way to utilize helper functions like `find_scientist`
    # it is a nice refinement, but not necessary for the code challenge

    def index
        render json: Scientist.all
    end

    def show
        # now we can just use the @scientist instance var provided by find_scientist which was invoked by the before_action!
        render json: @scientist, serializer: ScientistWithPlanetsSerializer
    end

    def create
        scientist = Scientist.create!(scientist_params)
        render json: scientist, status: :created
    end

    def update
        # scientist = find_scientist # this is replaced by before_action
        @scientist.update!(scientist_params)
        render json: @scientist, status: :accepted
    end

    def destroy
        @scientist.destroy
        head :no_content
    end

    private

    def find_scientist
        @scientist = Scientist.find(params[:id])
    end

    def scientist_params
        params.permit(:name, :field_of_study, :avatar)
    end


end
