module Api
  module Web
    class TagsController < ActionController::Base
      TAG_DISPLAY_MAP = {
        'mothers-day' => 'Mother\'s Day',
        'fathers-day' => 'Father\'s Day'
      }

      def index
        begin
          tags = Product.tag_counts_on(tag_params[:list]).map(&:name) || []

          if tags.empty?
            tags = ActsAsTaggableOn::Tag.all.map do |t|
              if t.taggings_count > 0
                t.name
              end
            end.compact
          end



          render json: { tags: tags.map { |t| TagsController::TAG_DISPLAY_MAP[t] } }, status: :ok
        rescue => exception
          render json: { errors: { tags_error: exception.to_s } }, status: :internal_server_error
        end
      end

      private

      def tag_params
        params.permit(:list)
      end
    end
  end
end
