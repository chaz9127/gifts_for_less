module Api
  module Web
    class ProductsController < ActionController::Base

      def index
        begin
          products = Product.all

          render json: { products:  products.map(&:serialized_hash) }, status: :ok
        rescue => exception
          render json: { errors: { products_error: 'Something went wrong while retrieving Products' } }, status: :internal_server_error
        end
      end

      private

    end
  end
end
