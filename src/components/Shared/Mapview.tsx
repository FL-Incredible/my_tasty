import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import mapboxgl from 'mapbox-gl';
import { ReactNode, useEffect, useRef, useState } from 'react';

const geojson = {
  type: 'Food Trucks',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-82.45371, 28.08745],
      },
      /**
       * <iframe width="560" height="315" src="https://www.youtube.com/embed/uHxqG2_qSt0?si=MzG1etftK6ZYbNiG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       */
      properties: {
        title: 'Property Details',
        videoUrl:
          'https://www.youtube.com/embed/uHxqG2_qSt0?si=MzG1etftK6ZYbNiG',
        description: (
          <>
            <span>Citgo gas station Tampa Bay</span>
            <div>
              <a
                style={{ textDecoration: 'underline' }}
                target='_blank'
                href='https://www.youtube.com/watch?v=uHxqG2_qSt0'>
                Youtube Link
              </a>
            </div>
          </>
        ),
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-82.45522, 28.01051],
      },
      properties: {
        title: 'Property Details',
        description: 'Tampa Bay',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-82.45968, 27.99942],
      },
      properties: {
        title: 'Property Details',
        description: 'Tampa Bay',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-82.55576, 27.99724],
      },
      properties: {
        title: 'Property Details',
        description: 'Tampa Bay',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-82.5024, 27.89337],
      },
      properties: {
        title: 'Property Details',
        description: 'Tampa Bay',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-82.45196, 28.07497],
      },
      properties: {
        title: 'Property Details',
        description: 'Tampa Bay',
      },
    },
  ],
};

function MarkerModal({
  isOpen,
  onClose,
  modalData: { modalBody, modalTitle },
}: {
  isOpen: boolean;
  onClose: () => void;
  modalData: {
    modalTitle: ReactNode;
    modalBody: ReactNode;
  };
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>

          <ModalFooter>
            <Button mr={3} variant='ghost'>
              Purchase
            </Button>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

class ClickableMarker extends mapboxgl.Marker {
  private _element: Element | null = null;
  private _handleClick: any;
  constructor(e: any) {
    super(e);
    this._element = e;
  }
  // new method onClick, sets _handleClick to a function you pass in
  onClick(handleClick: any) {
    this._handleClick = handleClick;
    return this;
  }

  // the existing _onMapClick was there to trigger a popup
  // but we are hijacking it to run a function we define
  _onMapClick(e: any) {
    const targetElement = e.originalEvent.target;
    const element = this._element;

    if (
      this._handleClick &&
      (targetElement === element || element?.contains(targetElement))
    ) {
      this._handleClick();
    }
  }
}

const Mapview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalData, setModalData] = useState({
    modalTitle: <></>,
    modalBody: <></>,
  });

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-82.458444);
  const [lat, setLat] = useState(27.9477595);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (!mapContainer.current) return;
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      accessToken:
        'pk.eyJ1IjoiZm9vZHRydWNrcyIsImEiOiJja3R1Z2J4Z2YwMm1oMnZwZ2J4Z2J4Z2J4In0.1',
    });
    // map.current.on("click", function (e) {
    //   var features = map.current?.queryRenderedFeatures(e.point);

    //   if (!features || !features.length) {
    //     return;
    //   }

    //   var feature = features[0];
    //   //Use Feature and put your code
    //   // Populate the popup and set its coordinates
    //   // based on the feature found.
    //   console.log("show popup for ", feature.properties);
    // });
    // add markers to map
    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      const marker = new ClickableMarker(el)
        .setLngLat(feature.geometry.coordinates as [number, number])
        .onClick(() => {
          // onClick() is a thing now!
          onOpen();
          console.log('feature is', feature);
          setModalData({
            modalTitle: <div>{feature.properties.title}</div>,
            modalBody: (
              <>
                <div>Location is: {feature.properties.description}</div>
                {feature.properties.videoUrl && (
                  <iframe
                    width='400'
                    height='200'
                    src={feature.properties.videoUrl}
                    title='YouTube video player'
                    frameBorder='0'
                    allow='accelerometer; 
                  autoplay; 
                  clipboard-write; 
                  encrypted-media; 
                  gyroscope; 
                  picture-in-picture; 
                  web-share'
                    allowFullScreen></iframe>
                )}
                <div>
                  Coords: ${feature.geometry.coordinates.at(0)},{' '}
                  {feature.geometry.coordinates.at(1)}
                </div>
              </>
            ),
          });
        })
        .addTo(map.current);

      // const popup = new mapboxgl.Popup()
      //   .setHTML(
      //     <>
      //       <MarkerModal isOpen={isOpen} onClose={onClose} />
      //     </>
      //   )
      //   .addTo(map.current);
      // marker.setPopup(popup);
    }
  });

  return (
    <>
      <div ref={mapContainer} className='map-container'></div>
      <MarkerModal isOpen={isOpen} onClose={onClose} modalData={modalData} />
    </>
  );
};

export default Mapview;
