export const Dates = () => {
  return (
    <div className="sticky mb-2 top-0 left-0 -ml-12:first-child pl-12:first-child z-50 bg-background no-scrollbar pt-2 text-center text-xs font-medium uppercase text-neutral-400">
      <div className="mb-2 grid grid-cols-7">
        <div>MON</div>
        <div>DIE</div>
        <div>Mit</div>
        <div>don</div>
        <div>fre</div>
        <div>sam</div>
        <div>son</div>
      </div>
      <div className="grid grid-cols-7 text-2xl">
        <div>
          <div className="dark:bg-blue-500/40 bg-blue-500 rounded-full text-white rounded-full inline-flex items-center px-2 aspect-square">
            24
          </div>
        </div>
        <div>25</div>
        <div>26</div>
        <div>27</div>
        <div>28</div>
        <div>29</div>
        <div>30</div>
      </div>
    </div>
  );
};
