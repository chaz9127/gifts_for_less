module Api
  module Web
    class ProductsController < ActionController::Base

      def index
        begin
          products = []

          if product_params[:holiday] && product_params[:holiday] != 'all'
            products = Product.tagged_with(product_params[:holiday])

            raise "There are no tags with this name '#{product_params[:holiday]}'" if products.empty?
          else
            products = Product.all
          end

          render json: { products:  products.map(&:serialized_hash) }, status: :ok
        rescue => exception
          render json: { errors: { products_error: exception.to_s } }, status: :internal_server_error
        end
      end

      def tags
        begin

        rescue => exception

        end
      end

      private

      def product_params
        params.permit(:holiday)
      end
    end
  end
end
