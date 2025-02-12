import Image from "next/image"
import { twMerge } from "tailwind-merge"
export const TestimonialCol = (props: {testimonials: any, className?: string}) => {
    return <div className={twMerge("flex flex-col gap-6 mt-10 testimonial-fade", props.className)}>
          {props.testimonials.map((testimonial : any)=><div className="card">
            <div>{testimonial.text}</div>
            <div className="flex items-center gap-2 mt-5">
              <Image src={testimonial.imageSrc} alt={testimonial.name} width={40} height={40} className="h-10 w-10 rounded-full"></Image>
              <div className="flex flex-col ">
                <div className="font-medium tracking-tight leading-5">{testimonial.name}</div>
                <div className="leading-5 tracking-tight">{testimonial.username}</div>
              </div>
            </div>
          </div>)}
        </div>
    return ''
}