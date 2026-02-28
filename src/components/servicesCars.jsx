import { APP_STRINGS } from "../constants/strings";

const ServiceCard = ({ image, title, subtitle, meta, badge, description, whatsapp }) => (
    <div className="group w-[300px] bg-white rounded-xl shadow-sm border border-gray-100 flex-shrink-0 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">

        {image && (
            <div className="w-full h-44 overflow-hidden bg-gray-50">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
            </div>
        )}

        <div className="p-4 flex flex-col gap-1.5 flex-1">
            <p className="font-semibold text-gray-800">{title}</p>
            {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
            {meta && <p className="text-sm text-gray-500">{meta}</p>}
            {badge && (
                <span className="self-start text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 border border-amber-400 text-amber-600 rounded-sm">
                    {badge}
                </span>
            )}
            {description && <p className="text-xs text-gray-400 line-clamp-2">{description}</p>}

            <div className="flex gap-2 mt-auto pt-3 border-t border-gray-100">
            <a
                href={`https://wa.me/${APP_STRINGS.OwnerContact.whatsapp}?text=${encodeURIComponent(whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 flex-1 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200"
        >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.854L.057 23.882l6.195-1.624A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.372l-.36-.214-3.724.976.999-3.633-.234-.374A9.817 9.817 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                WhatsApp
            </a>

            <a
            href={`tel:${APP_STRINGS.OwnerContact.phone}`}
            className="flex items-center justify-center gap-1 flex-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
            </svg>
            Call
        </a>
    </div>
    </div >
  </div >
);

export default ServiceCard;